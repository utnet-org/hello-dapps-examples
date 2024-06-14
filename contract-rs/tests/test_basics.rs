use unc_sdk::UncToken;
use serde_json::json;

const FIVE_UNC: UncToken = UncToken::from_unc(5);

#[tokio::test]
async fn test_contract_is_operational() -> Result<(), Box<dyn std::error::Error>> {
    let sandbox = utility_workspaces::sandbox().await?;
    let contract_wasm = utility_workspaces::compile_project("./").await?;

    let root = sandbox.root_account()?;

    let user_account = root.create_subaccount("user").transact().await?.unwrap();
    let contract_account = root.create_subaccount("contract").initial_balance(FIVE_UNC).transact().await?.unwrap();

    let contract = contract_account.deploy(&contract_wasm).await?.unwrap();

    let outcome = user_account
        .call(contract.id(), "set_greeting")
        .args_json(json!({"greeting": "Hello World!"}))
        .transact()
        .await?;
    assert!(outcome.is_success());

    let user_message_outcome = contract
        .view("get_greeting")
        .args_json(json!({}))
        .await?;
    assert_eq!(user_message_outcome.json::<String>()?, "Hello World!");

    Ok(())
}

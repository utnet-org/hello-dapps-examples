# contract-rs

new-project-description

## How to Build Locally?

Install [`unc CLI`](https://github.com/utnet-org/utility-cli-rs) and run:

```bash
unc dev-tool build
```

## How to Test Locally?

```bash
cargo test
```

## How to Deploy?

To deploy manually, install [`unc CLI`](https://github.com/utnet-org/utility-cli-rs) and run:

```bash
# Create a new account
unc dev-tool create-dev-account

# Deploy the contract on it
## unc dev-tool deploy 377ac29dcdcf80f8741c987df93e6381bc4dd36686eff06780438d1fc10970ef without-init-call network-config testnet sign-with-keychain send
unc dev-tool deploy <account-id>
```
## Useful Links

- [NEAR Rust SDK Documentation](https://docs.near.org/sdk/rust/introduction)
- [NEAR Documentation](https://docs.near.org)
- [NEAR StackOverflow](https://stackoverflow.com/questions/tagged/nearprotocol)
- [NEAR Discord](https://near.chat)
- [NEAR Telegram Developers Community Group](https://t.me/neardev)
- NEAR DevHub: [Telegram](https://t.me/neardevhub), [Twitter](https://twitter.com/neardevhub)

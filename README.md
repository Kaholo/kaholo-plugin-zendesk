# kaholo-plugin-zendesk
Zendesk plugin for Kaholo.

## Settings
1. Token (Vault) **Optional** - Default token to authenticate with to Zendesk.

## Method: Create a User
Create a new user on your Zendesk account, in the specified company.

### Parameters
1. Username (String) **Required** - The username of the new user to create.
2. Token (Vault) **Optional** - The token to authenticate with to Zendesk in this run. Required in case default token wasn't provided in settings.
3. Compagny (String) **Required** - The compagny of the new user.
4. Email (String) **Required** - The email of the new user.
5. Name (String) **Required** - The name of the new user.
# First setup
This branch of the bot is meant for single servers, the multiple server branch will come out later
### Config File
The config file is a releatively simple json file with only 2 properties, it contains information for the bots token and the prefix
```json
{
	"prefix": "Prefix",
	"token": "Token"
}
```
Replace Prefix with a prefix (such as a!) and token with your bots token and place in the bots root directory (outside of src)
### Permissions
This is a little bit harder to setup but it still should be pretty easy so dont be scared!
There are 3 basic levels of permissions, Deployer, Admin, and Mod

**WARNING: DEPLOYER IS A VERY RISKY PERMISSION DUE TO DEPLOYERS BEING ABLE TO INSTALL DENO MODS, HAVE CAUTION WHILE ASSIGING**

an example permission file is given below:
```json
{
    "840060515803070495":{
        "1":["840083046032212049","840083197856841728"],
        "2":["840083046032212049"]
    }
}
```
The top level (840060515803070495) is the ID of the server this affects
inside the server, there is another map of objects, 
the keys are: 1 is Mod and 2 is Admin
The values being assigned to the key are arrays of roles that are in that scope, for example `840083046032212049` is an admin roles and `840083197856841728` is a mod role, only `840083046032212049` can access the admin commands but both `840083046032212049` and `840083197856841728` can access mod commands.

Note: 3 cannot be assigned in permissions.json, and it hardcoded in src/denolib/permissions.js

### 2fa Auth Keys
Last but not least is keys.json, this is not vital to the bots function but this can add a layer of security to it,
2fa keys are needed when doing deployer functions such as adding Deno Mods

We will update this section Later, please stay tuned

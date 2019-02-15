
# Introduce
This is a template for react-native project, it using **ts** typescript, **redux-observable** for async actions  
# Environments
There are 3 environments in app: **Debug, Staging and Product.**

To change Base url, Version name, Version code, event App name,... for each environment, you must  change in .env file.

> Debug:  **.env**

> Staging : **.env.staging**

> Production : **.env.production**

Example .env file: 

```
APP_ID='com.rntemp'
VER_CODE='1'
VER_NAME='1.0.0'

```
## Config keystore for android
```
keystore/release.keystore.properties
```
Config your keystore file, password, alias...

## Run and build

Run commands to remove and install node module:
```
rm -rf node_modules && npm install
```

**Remember:** You don't need to run `react-native link` , because the project have linked already.And some projects will build fail with this command.

### ANDROID

- **Run android:**

Start server first :

```
npm start
```

Run on emulator **(emulator must be opened before)** or real device:

```
npm run android
npm run android-staging
npm run android-production
```
                                                     
Build command:

```
npm run android-build-staging
npm run android-build-production
```

  APK file will be exported in **node-modules/android/app/build/outputs/apk/** folder


### IOS

- **Run ios (only simulator):**

```
...
```

- **Build ios:**

```
...
```                                                 
# Coding Rules
## Components
- **Only perform interface**
- **On render function: should not contain the entire screen interface definition, because it will make your code be ugly, not look good**

**example**
```
render(){
    return(
        // render ui a
        .....
        .....
        .....
        // render ui b
        .....
        .....
        .....
        // render ui a
        .....
        .....
        .....
        // render ui b
        .....
        .....
        .....
    )
}
```
**should be**
```
renderA = () => {
    return(
        // render ui a
        .....
        .....
        .....    
    )
}
renderB = () => {
    return(
        // render ui b
        .....
        .....
        .....    
    )
}
renderC = () => {
    return(
        // render ui c
        .....
        .....
        .....    
    )
}
renderD = () => {
    return(
        // render ui d
        .....
        .....
        .....    
    )
}
render(){
    return(
        //renderA
        //renderB
        //renderC
        //renderD    
    )
}
```
## Container 

- **Contain component logic & redux logic**
```$xslt
- Container will connect to screen
- Screen will call logic on container via prop
```


# React Native Ski App
For tracking lanes and positions of skiers coming down the slope. Built on React Native. 

### Instructions
1. ``` npm install ```
2. Follow [instructions here](https://github.com/lwansbrough/react-native-camera) to allow for camera use on iOS / Android.


### Hiding Warnings on iOS
See this [Stack Overflow Post](https://stackoverflow.com/questions/44081674/react-native-connection-has-no-connection-handler-error-meaning)

## Building for Android
These are loose instructions for building on Android. 

### Setting up an Android Emulator
1. [Download and install Java SE Development Kit 8.](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Set the ```JAVA_HOME``` environment variable to your jdk installation. The path should look something like ```C:\Program Files\Java\jdk1.8.0_151```.
3. [Download and install Android Studio.](https://developer.android.com/studio/index.html)
4. Open the Android SDK Manager (Configure->SDK Manager from the home screen or Tools->Android->SDK Manager from the editor.) On the bottom right of the Manager in the "SDK Platforms" tab, select "Show Package Details". Under Android 6.0 (Marshmallow) select Android SDK Platform 23, Sources for Android 23, and the appropriate Intel x86 Atom System Image for your system (or both if you aren't sure). Navigate to the SDK Tools tab and select Android Emulator, Android SDK Tools, and the Intel x86 Emulator Accelerator (HAXM installer). Click "OK" to install.
5. Add the ```Android/Sdk/tools```, ```Android/Sdk/tools/bin```, and ```Android/Sdk/platform-tools``` directories to your system's PATH. 
6. Open the Android Virtual Device (AVD) Manager (Tools->Android->AVD Manager from the editor.) Click "Create Virtual Device" and select the device you would like to emulate (Pixel XL recommended.) Click Next, then select Marshmallow from the list of system images. Click next, enter a name for your AVD if you would like one different from the default, then click Finish. Start the emulator by clicking the Play button under the Actions column.
[Here you can find instructions](https://facebook.github.io/react-native/docs/running-on-device.html) for building and running on device over USB.


### Installing node dependencies and building on your device
1. This project requires node and npm. It is confirmed working on ```node v7.10.1``` and ```npm 4.2.0```. You can find them [here](https://nodejs.org/en/download/).
2. Install [react-native-cli](https://www.npmjs.com/package/react-native-cli) with ```npm i -g react-native-cli```.
3. Run ```npm i``` in the project directory to install the required node packages.
4. Run ```react-native eject``` to build the Android project. 
5. Run ```react-native link``` to link native libraries. 
6. Run ```react-native start``` to start the React packager.
7. In a new terminal, run ```react-native run-android``` to build and install the app on your Android device.
8. Run ```react-native log-android``` to connect display console logs.

For more information on debugging, refer to the [docs](https://facebook.github.io/react-native/docs/debugging.html).

Run ```adb shell input keyevent 82``` to open the in-app developer menu if you would like to enable hot/live reloading.
If you are debugging over USB, use ```adb reverse tcp:8081 tcp:8081``` to connect to the development server.
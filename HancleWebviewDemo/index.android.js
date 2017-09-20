/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import WebViewAndroid from 'react-native-webview-android-hancle';

export default class HancleWebviewDemo extends Component {

    render() {
        const url = 'http://localhost:8081/test.html';
        return (
            <WebViewAndroid
                ref={(ref) => {
                    this.webview = ref;
                }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={true}
                startInLoadingState={true}
                geolocationEnabled={false}
                builtInZoomControls={false}
                decelerationRate="normal"
                automaticallyAdjustContentInsets={false}
                onShouldStartLoadWithRequest={() => {
                    const shouldStartLoad = true;
                    return shouldStartLoad;
                }}
                onError={this._onError.bind(this)}
                jsToApp={this.handleMessage.bind(this)}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                style={styles.container}
                source={{uri: url}}
            />
        );
    }


    _onError(error) {
        alert(error.message);
    }
    handleMessage(params) {
        alert(params.title);
    }

    onNavigationStateChange(navState) {
        alert(navState.title);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('HancleWebviewDemo', () => HancleWebviewDemo);

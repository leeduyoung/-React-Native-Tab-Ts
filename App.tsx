import React, { Component } from 'react';
import { Platform, Text, View, StatusBar } from 'react-native';

import styles from './styles';
import AppLoading from './components/AppLoading';
import AppNavigator from './navigation/AppNavigator';

interface IAppProps
{
    isLoadingComplete: boolean;
}

interface IAppState
{

}

export default class App extends Component<IAppProps, IAppState>
{
    constructor(props: IAppProps)
    {
        super(props);
    }
    
    public state =
    {
        isLoadingComplete: false
    }

    public render(): JSX.Element 
    {
        if(!this.state.isLoadingComplete)
        {
            return (
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                    <Text>loading...</Text>
                </View>
            );
        }
        else
        {
            return (
                <View style={styles.container}>
                    {/* <Text>Hello world!!!</Text> */}
                    <AppNavigator />
                </View>
            );
        }
    }
    
    componentWillMount()
    {
        setTimeout(() => {
            this._handleFinishLoading();
        }, 1000);
    }

    private _loadResourcesAsync = async(): Promise<any> =>
    {
        console.log('_loadResourcesAsync called');
    }

    private _handleLoadingError = (error: any) => 
    {
        console.log('_handleLoadingError called');
    }

    private _handleFinishLoading = () => 
    {
        console.log('_handleFinishLoading called');
        this.setState({ isLoadingComplete: true });
    }
}

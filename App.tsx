import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './styles';
import AppLoading from './components/AppLoading';

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
                // <View style={styles.container}>
                //     <Text>loading...</Text>
                    <AppLoading 
                        startAsync={this._loadResourcesAsync}
                        onError={this._handleLoadingError}
                        onFinish={this._handleFinishLoading}
                    />
                // </View>
            );
        }
        else
        {
            return (
                <View style={styles.container}>
                    <Text>Hello world!</Text>
                </View>
            );
        }
    }

    private _loadResourcesAsync = async(): Promise<any> =>
    {
        console.log('_loadResourcesAsync called');
        return new Promise((resolve, reject) => {
            resolve(true);
        });
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

import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface IAppLoadingProps
{
    /** A `function` that returns a `Promise`. The `Promise` should resolve when the app is done loading data and assets. */
    startAsync?: () => Promise<void>;

    /** Required if you provide `startAsync`. Called when `startAsync` resolves or rejects. This should be used to set state and unmount the `AppLoading` component. */
    onFinish?: () => void;

    /** If `startAsync` throws an error, it is caught and passed into the function provided to `onError`. */
    onError?: (error: Error) => void;    
}

export default class AppLoading extends Component<IAppLoadingProps> 
{
    constructor(props: IAppLoadingProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <View>
                <Text>Loading....</Text>
            </View>
        );
    }
}
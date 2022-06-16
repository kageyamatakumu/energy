import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import { InputArea } from '../components/pages/InputArea'
import { Led } from '../components/pages/Led'
import { Page404 } from '../components/pages/Page404'
import { Result } from '../components/pages/Result'
import { ResultHarf } from '../components/pages/ResultHarf'
import { ResultOneYear } from '../components/pages/ResultOneYear'
import { Top } from '../components/pages/Top'

export const Router = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Top />
            </Route>
            <Route exact path="/input">
                <InputArea />
            </Route>
            <Route  path="/result" render={({match: {url}}) => (
                <Switch>
                    <Route exact path={url}>
                        <Result />
                    </Route>
                    <Route path={`${url}/harf`}>
                        <ResultHarf />
                    </Route>
                    <Route  path={`${url}/one_year`}>
                        <ResultOneYear />
                    </Route>
                    <Route  path={`${url}/led`}>
                        <Led />
                    </Route>
                    <Route path={`${url}/*`}>
                        <Page404 />
                    </Route>
                </Switch>
            )} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})

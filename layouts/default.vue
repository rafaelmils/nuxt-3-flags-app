<template>
    <Html>
        <Head>
            <Title>
                Welocme to the languages page
            </Title>
        </Head>
    </Html>
    <TheHeader />
    <!-- <body>
        <header></header>
        <Main>
            <Switch>
                <Route path="/about" component="{About}" />
                <Route path="/" component="{Home}" />
            </Switch>
        </Main>
    </body> -->
    <slot></slot>
    <TheFooter />
</template>
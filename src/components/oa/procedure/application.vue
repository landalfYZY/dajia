<template>
    <transition name="el-fade-in-linear">
        <div>
            <Card style="width:350px">
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    Classic film
                </p>
                <a href="#" slot="extra" @click.prevent="changeLimit">
                    <Icon type="ios-loop-strong"></Icon>
                    Change
                </a>
                
            </Card>
        </div>
    </transition>
</template>

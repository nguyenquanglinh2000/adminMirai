<template>
    <div>
        {{listContract}}
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ContractComponent',
        computed: {
            ...mapState({
                listContract: state => state.listContract.listContract
            })
        },
        mounted(){
            this.getListContract()
        },
        methods:{
            ...mapActions('listContract', ['getListContract'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
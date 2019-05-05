<template>
    <div id="newAddress">
        <div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newAddress"
    }
</script>

<style scoped lang="scss">
    #newAddress{
        div:nth-child(1){
            width: 95%;
            margin: 0 auto;
            height: auto;
            div:nth-child(1){
                margin-top: .3rem;
                .x{
                    width: 100%;
                    height: .35rem;
                    border: .01rem solid #e5e5e5;
                    background-color: #666666;
                }
            }
        }
    }
</style>

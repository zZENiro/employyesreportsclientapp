<template>
    <div>
        <PeopleList v-bind:peopleData="people"/>
    </div>
</template>

<script>
import PeopleList from '@/components/PeopleList'

export default {    
    components:
    {
        PeopleList
    },
    data() {
        return {
             people: [
                {
                id: 1,
                name: "Nikita",
                secondname: "Vedernikov",
                thirdname: "Aleksandrovich",
                email: "soloistcsgo@yandex.ru",
                reports: 
                {
                    id_report: 1,
                    title: "Some message",
                    date: Date.parse("2020-09-03"),
                    hoursElapsed: 4
                }
                },
                {
                id: 2,
                name: "NonValidOne",
                secondname: "NonValidOne",
                thirdname: "NonValidOne",
                email: "NonValidOne@yandex.ru",
                reports: 
                {
                    id_report: "23ad",
                    title: "Some message",
                    date: Date.parse("2020/03/03"),
                    hoursElapsed: "12d"
                }
                }
            ]
        }
    },
}
</script>
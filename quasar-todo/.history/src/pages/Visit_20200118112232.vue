<template>
      <div id="app">
        <div class="main">
          <div class="calendar-holder">
            <calendar :events="events" />
          </div>
          <div class="form-holder">
            <h3>Schedule an event</h3>
            <event-form />
          </div>
        </div>
      </div>
    </template>
    <script>
    import Calendar from './components/Calendar.vue'
    import EventForm from './components/EventForm.vue'
    import Pusher from 'pusher-js';
    export default {
      name: 'app',
      components: {
        Calendar,
        EventForm
      },
      data(){
        return {
          events: [{
            title     :  'event1',
            start     : '2018-07-09',
            cssClass  : 'blue',
            YOUR_DATA : {}
          },
          {
            title     : 'event2',
            start     : '2018-07-10',
            end       : '2018-07-13',
            cssClass  : ['orange']
          }] 
        }
      }
    }
    </script>
    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    .main {
      display: flex;
      align-items: center;
    }
    .calendar-holder {
      width: 65%;
    }
    .form-holder {
      width: 35%;
    }
    .form-holder > h3 {
      color: orangered;
      text-transform: uppercase;
      font-size: 16px;
      text-align: left;
      margin-left: 30px;
      margin-bottom: 10px;
    }
    </style>
    <script>
    import DatePicker from 'vuejs-datepicker';
    import format from 'date-fns/format';
    import ColorPicker from './ColorPicker';

    export default {
      name: 'EventForm',
      data(){
        return {
          event: {
            title: '',
            start: '',
            end: '',
            cssClass: '',
            data: {
              description: ''
            }
          }
        }
      },
      methods: {
        async handleSubmit(){
          const start = format(this.event.start, 'YYYY-MM-DD');
          const end = format(this.event.end, 'YYYY-MM-DD');
          const event = {
            ...this.event,
            start,
            end
          }
          const req = await fetch('http://localhost:4000/schedule', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
              'content-type': 'application/json'
            }
          });
          const res = await req.json();
          this.resetValues();
        },
        selectColor(color){
          this.event = {
            ...this.event,
            cssClass: color
          }
        },
        resetValues(){
          this.event = {
            title: '',
            start: '',
            end: '',
            cssClass: '',
            data: {
              description: ''
            }
          }
        }
      },
      components: {
        DatePicker,
        ColorPicker
      }
    }
    </script>
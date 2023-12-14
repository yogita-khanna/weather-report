
const num = document.querySelector(".number");
const temperature = document.querySelector(".temperature");
const date = document.querySelector(".main-date");
const dateDay = document.querySelector(".main-date");
const day = document.querySelector(".main-date-2");
const id = document.getElementById('0');
function load() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=dadbc57efbf758c7dc77191a6325b312`
      )
      .then((res) => {

            console.log(res);
            const resdata = res.data.list;

            // const set = new Set;
            // var i=0;
            // resdata.forEach((e)=>{
            //   const forecastDate = new Date(e.dt_txt);
            //   const dayAbbreviation = forecastDate.toLocaleDateString("en",{
            //     weekday: "short",
            //   });
            //   set.add(dayAbbreviation);
            // })

            // for (const value of set) {
            //   console.log(value);
            // }


            let currentDate = new Date().getDate();
            resdata.forEach((e,i)=>{
                const forecastDate = new Date(e.dt_txt);
                const date = forecastDate.getDate();

                const dayAbbreviation = forecastDate.toLocaleDateString("en",{
                    weekday: "short",
                });

                if(date===currentDate){

                  // console.log(e.main.temp)
                  var time = e.dt_txt.split(' ')
                  let div = document.createElement('div');
                  div.classList.add('pannel2');
                  div.innerHTML = `
                  <div class="time">${time[1]}</div>
                  <div class="day">${dayAbbreviation}</div>
                  <div class="circle"></div>
                  <div class="temperature" id="6">${Math.floor(e.main.temp -273)+" deg"}</div>
                  `
                  document.querySelector('.hero').append(div);

                  currentDate++;
                }

            })
            const first = res.data.list[0].main.temp;
            num.append(Math.floor(first-273)+" deg");

            const forecastDate = new Date(res.data.list[0].dt_txt);
            const dayAbbreviation = forecastDate.toLocaleDateString("en",{
              weekday: "short",
            });
            const dateDay = dayAbbreviation;
            date.append(dateDay+", ");

            const dateAndTime = res.data.list[0].dt_txt.split(' ');
            date.append(dateAndTime[1]);

            const type = res.data.list[0].weather[0].main;
            day.append(type)
        })
        .catch(err => {
            console.log(err);
        })
  }
  load();




// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=dadbc57efbf758c7dc77191a6325b312
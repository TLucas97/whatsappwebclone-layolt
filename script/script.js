var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        document.getElementById("current_date").innerHTML = time;

        function imageSwitch(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/428/428933.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Jack Williams"
            background.style.backgroundImage = "url('https://digitalents.com.br/wp-content/uploads/2017/02/Accenture-ambitious-agenda-digital-marquee.jpg')";
        }
        function imageSwitch2(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/4086/4086577.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Julia Roberts"
            background.style.backgroundImage = "url('https://www.10wallpaper.com/wallpaper/1366x768/1705/Cuxhaven_germany_lake_sunset-Beautiful_landscape_wallpaper_1366x768.jpg')";
        }
        function imageSwitch3(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/921/921089.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Judy Rock"
            background.style.backgroundImage = "url('https://i.pinimg.com/originals/4f/6f/a5/4f6fa5512364d0b3b4485c94fd737d9b.jpg')";
        }
        function imageSwitch4(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122491.png?token=exp=1645847308~hmac=d5c26dcb210e7955c8781548ffadf4f6"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Yummi Nagasaki"
            background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2742875.jpg')";
        }
        function imageSwitch5(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/122/122468.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Bob fly"
            background.style.backgroundImage = "url('https://picjumbo.com/wp-content/uploads/calm-sea-background-2210x1473.jpg')";
        }
        function imageSwitch6(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122456.png?token=exp=1645847405~hmac=2ea5c2278f98c4288c1a9628e2205bfe"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "John Strew"
            background.style.backgroundImage = "url('https://i.pinimg.com/originals/13/65/96/1365966106c7cf5a9e4eb0cbe5d20432.jpg')";
        }
        function imageSwitch7(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122453.png?token=exp=1645847429~hmac=bf333442b44bfdd5b54d09ff185b61a2"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Willy Dewit"
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')";
        }
        function imageSwitch8(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/924/924874.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Hacker-man"
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80')";
        }
        function imageSwitch9(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/2790/premium/2790435.png?token=exp=1645847526~hmac=551eb7d7e592d750c0b3a10980cad60f"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Charizard"
            background.style.backgroundImage = "url('https://wallpaperforu.com/wp-content/uploads/2021/08/Wallpaper-Pokemon-Wallpaper-Pokemon-Minimalism-Squirtle441280x1024.jpg')";
        }
        function imageSwitchStart(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/2922/2922566.png"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Flavia Senna"
            background.style.backgroundImage = "url('https://wallpaperaccess.com/full/562233.jpg')";
        }

        let state = false       

        function darkMode(){
            const background = document.getElementById("wrap")
            const sidebar = document.getElementById("side-change")
            const sidebar2 = document.getElementById("side-change2")
            const sidebar3 = document.getElementById("side-change3")

            background.style.background = "#0A1014";
            sidebar.style.background = "grey";
            sidebar2.style.background = "grey";
            sidebar3.style.background = "grey";
        }
        function normalMode(){
            const background = document.getElementById("wrap")
            const sidebar = document.getElementById("side-change")
            const sidebar2 = document.getElementById("side-change2")
            const sidebar3 = document.getElementById("side-change3")

            background.style.background = "#00A884";
            sidebar.style.background = "#0B8369";
            sidebar2.style.background = "#0B8369";
            sidebar3.style.background = "white";
        }

        function switchState(){
            if (state == false){
                darkMode();
                state = true;
            } else {
                normalMode();
                state = false;
            }
        }

        function modalShow(){
            let modal = document.getElementById("modal_container");
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
        }

        function modalClose(){
            let modal = document.getElementById("modal_container");
            let userEdit = document.getElementById("edit-user")
            let userEdit2 = document.getElementById("edit-user2")
            let userName = document.getElementById("user")
            let userName2 = document.getElementById("user2")

            userEdit.style.display = "none"
            userEdit2.style.display = "none"
            userName.style.display = "block"
            userName2.style.display = "block"
            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }

        function editUserName(){
            let userName = document.getElementById("user")
            let userEdit = document.getElementById("edit-user")

            userName.style.display = "none"
            userEdit.style.display = "block"
        }

        function editUserStatus(){
            let userName2 = document.getElementById("user2")
            let userEdit2 = document.getElementById("edit-user2")

            userName2.style.display = "none"
            userEdit2.style.display = "block"
        }

        var input = document.querySelector("#name").value;
        console.log(input);


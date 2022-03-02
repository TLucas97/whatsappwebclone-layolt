var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        document.getElementById("current_date").innerHTML = time;

        function imageSwitch(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/428/428933.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Olá!"
            const text = document.getElementById("txt_1");
            text.textContent = "Jack Williams"
            background.style.backgroundImage = "url('https://digitalents.com.br/wp-content/uploads/2017/02/Accenture-ambitious-agenda-digital-marquee.jpg')";
        }
        function imageSwitch2(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/4086/4086577.png"
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Oii, tudo bom?"
            const background = document.getElementById("container")
            const text = document.getElementById("txt_1");
            text.textContent = "Julia Roberts"
            background.style.backgroundImage = "url('https://www.10wallpaper.com/wallpaper/1366x768/1705/Cuxhaven_germany_lake_sunset-Beautiful_landscape_wallpaper_1366x768.jpg')";
        }
        function imageSwitch3(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/921/921089.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Vamos visitar o chris!"
            const text = document.getElementById("txt_1");
            text.textContent = "Judy Rock"
            background.style.backgroundImage = "url('https://i.pinimg.com/originals/4f/6f/a5/4f6fa5512364d0b3b4485c94fd737d9b.jpg')";
        }
        function imageSwitch4(){
            document.getElementById("img_1").src="./assets/img/yumi-nagasaki.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Olá, tudo bem?"
            const text = document.getElementById("txt_1");
            text.textContent = "Yummi Nagasaki"
            background.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2742875.jpg')";
        }
        function imageSwitch5(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/122/122468.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Fala cara! Aqui é o Bob fly, o cara mais dahora da cidade"
            const text = document.getElementById("txt_1");
            text.textContent = "Bob fly"
            background.style.backgroundImage = "url('https://picjumbo.com/wp-content/uploads/calm-sea-background-2210x1473.jpg')";
        }
        function imageSwitch6(){
            document.getElementById("img_1").src="../assets/img/john-strew.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Olá senhor!"
            const text = document.getElementById("txt_1");
            text.textContent = "John Strew"
            background.style.backgroundImage = "url('https://i.pinimg.com/originals/13/65/96/1365966106c7cf5a9e4eb0cbe5d20432.jpg')";
        }
        function imageSwitch7(){
            document.getElementById("img_1").src="../assets/img/willy-dewit.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Olá, hehe"
            const text = document.getElementById("txt_1");
            text.textContent = "Willy Dewit"
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')";
        }
        function imageSwitch8(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/924/924874.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Hi."
            const text = document.getElementById("txt_1");
            text.textContent = "Hacker-man"
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80')";
        }
        function imageSwitch9(){
            document.getElementById("img_1").src="../assets/img/pikachu.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Pikachu!"
            const text = document.getElementById("txt_1");
            text.textContent = "Pikachu"
            background.style.backgroundImage = "url('https://wallpaperforu.com/wp-content/uploads/2021/08/Wallpaper-Pokemon-Wallpaper-Pokemon-Minimalism-Squirtle441280x1024.jpg')";
        }
        function imageSwitchStart(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/2922/2922566.png"
            const background = document.getElementById("container")
            let mensagem = document.getElementById("testzon")

            mensagem.textContent = "Seja bem vindo ao meu projeto"
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
            const board = document.getElementById("message-board")

            board.style.background = "#111B21"
            board.style.color = "white"
            background.style.background = "#0A1014";
            sidebar.style.background = "#222E35";
            sidebar.style.color = "white"
            sidebar2.style.background = "#222E35";
            sidebar3.style.background = "#222E35";
            sidebar3.style.color = "white"
        }
        function normalMode(){
            const background = document.getElementById("wrap")
            const sidebar = document.getElementById("side-change")
            const sidebar2 = document.getElementById("side-change2")
            const sidebar3 = document.getElementById("side-change3")
            const board = document.getElementById("message-board")

            board.style.background = "white"
            board.style.color = "black"
            sidebar.style.color = "black"
            sidebar3.style.color = "black"
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

        function modalProfileClose(){
            let modal = document.getElementById("modal_container2");

            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }

        function showProfile0(){
            let name = document.getElementById("txt_1")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");
            let testin = document.getElementById("img_1")

            profile_pic.src = testin.src
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Hello"
            user_name.textContent = name.textContent
        }
        function showProfile1(){
            let name = document.getElementById("txt_get")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");
            let testin = document.getElementById("testin")

            profile_pic.src = testin.src
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Estou atrás de oportunidades!"
            user_name.textContent = name.textContent
        }
        function showProfile2(){
            let name = document.getElementById("txt_get2")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/julia-roberts.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Carnaval em casa?"
            user_name.textContent = name.textContent
        }
        function showProfile3(){
            let name = document.getElementById("txt_get3")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/judy-rock.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Viajando... zzz"
            user_name.textContent = name.textContent
        }
        function showProfile4(){
            let name = document.getElementById("txt_get4")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/yumi-nagasaki.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Jogando pokemonGO"
            user_name.textContent = name.textContent
        }
        function showProfile5(){
            let name = document.getElementById("txt_get5")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/bob-fly.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Hello"
            user_name.textContent = name.textContent
        }
        function showProfile6(){
            let name = document.getElementById("txt_get6")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/john-strew.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Let's Go!"
            user_name.textContent = name.textContent
        }
        function showProfile7(){
            let name = document.getElementById("txt_get7")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/willy-dewit.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "Memento mori [...]"
            user_name.textContent = name.textContent
        }
        function showProfile8(){
            let name = document.getElementById("txt_get8")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/hacker-man.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "I'm !happy"
            user_name.textContent = name.textContent
        }
        function showProfile9(){
            let name = document.getElementById("txt_get9")
            let profile_pic = document.getElementById("profile_changer")
            let user_status = document.getElementById("user_model2")
            let user_name = document.getElementById("user_model")
            let modal = document.getElementById("modal_container2");

            profile_pic.src = './assets/img/pikachu.png'
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
            user_status.textContent = "..."
            user_name.textContent = name.textContent
        }

        function edit(){
            let userName2 = document.getElementById("user2")
            let userEdit2 = document.getElementById("edit-user2")
            let userName = document.getElementById("user")
            let userEdit = document.getElementById("edit-user")
            let pen = document.getElementById("pen")
            let save = document.getElementById("save")

            userName.style.display = "none"
            userEdit.style.display = "block"
            userName2.style.display = "none"
            userEdit2.style.display = "block"
            pen.style.display = "none"
            save.style.display = "block"
            // userEdit.value = userName.textContent
            userName.textContent = userEdit.value
        }

        function save(){
            let userName2 = document.getElementById("user2")
            let userEdit2 = document.getElementById("edit-user2")
            let userName = document.getElementById("user")
            let userEdit = document.getElementById("edit-user")
            let pen = document.getElementById("pen")
            let save = document.getElementById("save")

            userName.textContent = userEdit.value
            userName2.textContent = userEdit2.value

            userEdit.style.display = "none"
            userEdit2.style.display = "none"
            userName.style.display = "block"
            userName2.style.display = "block"
            pen.style.display = "block"
            save.style.display = "none"
        }

        const modalChanger = document.getElementById("modal_modify")
        const nameWrap = document.getElementById("nameWrap")
        const nameArea = document.getElementById("nameArea")



        // modalChanger.addEventListener('click', (event) => {
        //     const button = event.target;
        //     nameArea = button.parentNode;
        //     nameWrap = nameArea.parentNode;
        //      if(button.textContent === `<img src="https://cdn-icons.flaticon.com/png/512/3633/premium/3633357.png?token=exp=1645930416~hmac=fd930d6cf6dba0d1b5ec6fdeed4f3a2d" alt="aaa" width="60" style="margin: 0px 25px" class="opacity-default" onclick="editNameSucess()">`){
        //         const span = nameWrap.firstChild;
        //         const input = document.createElement('input');
        //         input.type = 'text';
        //         input.value = span.textContent
        //         nameArea.insertBefore(input, span)
        //      }
        // })


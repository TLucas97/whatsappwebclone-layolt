var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        document.getElementById("current_date").innerHTML = time;

        function imageSwitch(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/428/428933.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Jack Williams"
        }
        function imageSwitch2(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/4086/4086577.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Julia Roberts"
        }
        function imageSwitch3(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/921/921089.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Judy Rock"
        }
        function imageSwitch4(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122491.png?token=exp=1645847308~hmac=d5c26dcb210e7955c8781548ffadf4f6"
            const text = document.getElementById("txt_1");
            text.textContent = "Yummi Nagasaki"
        }
        function imageSwitch5(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/122/122468.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Bob fly"
        }
        function imageSwitch6(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122456.png?token=exp=1645847405~hmac=2ea5c2278f98c4288c1a9628e2205bfe"
            const text = document.getElementById("txt_1");
            text.textContent = "John Strew"
        }
        function imageSwitch7(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/122/premium/122453.png?token=exp=1645847429~hmac=bf333442b44bfdd5b54d09ff185b61a2"
            const text = document.getElementById("txt_1");
            text.textContent = "Willy Dewit"
        }
        function imageSwitch8(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/924/924874.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Hacker-man"
        }
        function imageSwitch9(){
            document.getElementById("img_1").src="https://cdn-icons.flaticon.com/png/512/2790/premium/2790435.png?token=exp=1645847526~hmac=551eb7d7e592d750c0b3a10980cad60f"
            const text = document.getElementById("txt_1");
            text.textContent = "Charizard"
        }
        function imageSwitchStart(){
            document.getElementById("img_1").src="https://cdn-icons-png.flaticon.com/512/2922/2922566.png"
            const text = document.getElementById("txt_1");
            text.textContent = "Flavia Senna"
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
            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }


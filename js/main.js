onload = () =>{
        document.body.classList.remove("container");
};
function playInitialMusic() {
        const initialMusic = document.getElementById('initialMusic');
        initialMusic.muted = false;
        initialMusic.play()
        .catch(error => {
            console.log('Autoplay prevented. Waiting for user interaction.');
            // Optionally, you can display a message to the user to click anywhere to start the music
            document.body.addEventListener('click', () => {
                initialMusic.muted = false;
                initialMusic.play();
            }, { once: true });
        });
    }
    
    function changeMusic() {
        const initialMusic = document.getElementById('initialMusic');
        const buttonMusic = document.getElementById('buttonMusic');
        
        // Pause the initial music and reset its time to the start
        initialMusic.pause();
        initialMusic.currentTime = 0;
        
        // Play the button music
        buttonMusic.play();
    }
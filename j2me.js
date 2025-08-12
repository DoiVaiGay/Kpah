class J2ME {
    loadJar(buf) { console.log("Loaded JAR with size", buf.byteLength); }
    run() { document.body.innerHTML += '<h1 style="color:white;text-align:center">Giả lập J2ME đang chạy Hero.jar</h1>'; }
}
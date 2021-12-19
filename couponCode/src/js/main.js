const copyCode = document.getElementById("copyCode");

copyCode.addEventListener("click", function(){
    const couponCode = document.getElementById("couponCode").innerHTML;

    navigator.clipboard.writeText(couponCode);
    copyCode.innerHTML = "COPIED";

    setTimeout(function(){
        copyCode.innerHTML = "COPY CODE";
    }, 3000);
});
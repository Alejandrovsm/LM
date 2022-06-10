


function ejercicio03(num) {
	num = BigInt(num)
    if(num==1n || num==0n) {
        return 1n;
    } else if (num<0n) {
        return -1;
    } else {
        return num*ejercicio03(num-1n);
    }
}
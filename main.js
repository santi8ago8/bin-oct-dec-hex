function toN(n,fact){
	var rest=[];
	while(n>0){

		rest.push(n%fact)
		n=Math.floor(n/fact)
	}
	rest.push(n);
	rest = convertLet(rest)
	return rest;
}

function toDecimal(n,fact){
	arr = n.toString().split('');
	arr = convertN(arr);
	var total = 0;
	var restText = "";
	for (var i=0;i<arr.length;i++){
		total+=arr[i] * Math.pow(fact,arr.length-i-1);
		restText+=arr[i].toString()+"*"+fact.toString()+"^"+(arr.length-i-1);
		if (arr.length!=i+1)
			restText+=" + "
	}
	return {text:restText+" = "+total,total:total};
}

function convertLet(arr){
	for(var i=0;i<arr.length;i++){
		if (arr[i]==10)
			arr[i]="A"
		if (arr[i]==11)
			arr[i]="B"
		if (arr[i]==12)
			arr[i]="C"
		if (arr[i]==13)
			arr[i]="D"
		if (arr[i]==14)
			arr[i]="E"
		if (arr[i]==15)
			arr[i]="E"

	}
	return arr;
}

function convertN(arr){
	for(var i=0;i<arr.length;i++){
		if (arr[i]=="A")
			arr[i]=10
		if (arr[i]=="B")
			arr[i]=11
		if (arr[i]=="C")
			arr[i]=12
		if (arr[i]=="D")
			arr[i]=13
		if (arr[i]=="E")
			arr[i]=14
		if (arr[i]=="F")
			arr[i]=15

	}
	return arr;	
}
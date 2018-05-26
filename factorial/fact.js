function fact1(x)
{
    var fac=1;
    if(x==0)
        {
            alert("the value is 1");
        }else if(x<0)
        {
            alert("the value is undefined");
        }else
        {
            for(var i=1;i<=x;i++)
                {
                    fac*=i;
                }
                alert("the value is "+fac);
        }
}
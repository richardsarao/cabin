
//app name thecabin
{
    "ecobeePin": "5pmc",
    "code": "419z2FGS608MWb2MjG6eJb7YNoM05rBA",
    "scope": "smartWrite",
    "expires_in": 9,
    "interval": 30
}


{
    "access_token": "y5zv5wcrozdk0aUFeQYN52F9ijLqYRGN",
    "token_type": "Bearer",
    "expires_in": 3599,
    "refresh_token": "Gk0cOg8wbGqbVy1ogCUxpZlpShCLhiUU",
    "scope": "smartWrite"
}
//Your app must remember the access_token and refresh_token values. The access_token is used to make API requests, and the refresh_token is used to obtain another valid access_token once the current access_token expires. An access_token expires in 60 minutes, while a refresh_token takes one year to expire.

//Once you've attained a valid access token, you can now use the access token along with your API Key to perform a request.

//The temperature values are all provided in units of 0.1 of a Fahrenheit (℉). For example, our actualTemperature of 711 is actually 71.1℉. It is up to the caller of the API to convert to Celsius (℃). You can use the following formula:
//(711 - 320) * 5 / 90 = 21.7℃  
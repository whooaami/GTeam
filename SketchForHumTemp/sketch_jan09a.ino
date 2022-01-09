#include <dht.h>

#include "dht.h"

// Analog Pin sensor is connected to
#define dht_apin A0 
 
dht DHT;
 
void setup(){
 
  Serial.begin(9600);

  //Delay to let system boot
  delay(500);
  Serial.println("DHT11 Humidity & temperature Sensor\n\n");

  //Wait before accessing Sensor
  delay(1000);
 
}
 
void loop(){
    DHT.read11(dht_apin);
    
    Serial.print("Current humidity = ");
    Serial.print(DHT.humidity);
    Serial.print("%  ");
    Serial.print("temperature = ");
    Serial.print(DHT.temperature); 
    Serial.println("C  ");

    //Wait 2 seconds before accessing sensor again.
    delay(2000);
}

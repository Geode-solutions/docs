# class PassKey

```cpp
Defined at ../../include/geode/basic/passkey.h#55
```

 This can be used to restrict which class can call methods Example:     class A     {         // Add a key only B can create         PASSKEY( B, KeyForB );

     public:         void restrictive_method( KeyForB )         {             // do something         }     };

     Now, B class is the only class that can call A::restrictive_method     class B     {     public:          void run( A& a )          {              // the {} will implicitly create a KeyForB              a.restrictive_method( {} );          }     };




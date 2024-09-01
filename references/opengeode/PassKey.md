<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class PassKey


 This can be used to restrict which class can call methods Example:     class A     {         // Add a key only B can create         PASSKEY( B, KeyForB );

     public:         void restrictive_method( KeyForB )         {             // do something         }     };

     Now, B class is the only class that can call A::restrictive_method     class B     {     public:          void run( A& a )          {              // the {} will implicitly create a KeyForB              a.restrictive_method( {} );          }     };




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

# class Factory


 Generic factory Example of use with A the base class and B, C derived classes      // Instantiation      using MyFactory = Factory< std::string, A, int, double >;      // where: - std::string is the Key type      //        - int and double are the constructor arguments required by      //        the derived classes B and C

      // Registration      MyFactory::register_creator< B >( "key_value_for_B" );      MyFactory::register_creator< C >( "key_value_for_C" );      // B and C constructors take an int and a double

      // Creation      auto c = MyFactory::create( "key_value_for_C", 2, 8.6 );      // where c is a std::unique_ptr< A >



```cpp
Inherits from Singleton
```



## Functions

### register_creator

```cpp
public void register_creator(Key key)
```


### create

```cpp
public std::unique_ptr<BaseClass> create(const Key & key, Args... args)
```


### list_creators

```cpp
public absl::FixedArray<Key> list_creators()
```


### has_creator

```cpp
public bool has_creator(const Key & key)
```





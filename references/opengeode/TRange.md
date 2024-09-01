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

# class TRange


 This class can be used to iterate over integer loop. Example:              = C++98 loop =    for( index_t i = 0; i < n; i++ )    {      // do something    }

            = C++11-like loop =    for( const auto i : Range{ n } )    {      // do something    }



```cpp
Inherits from BaseRange<Type, IncrementOperator>
```



## Functions

### TRange

```cpp
public void TRange<Type>(T1 begin, T2 end)
```


### TRange

```cpp
public void TRange<Type>(T end)
```


### begin

```cpp
public const TRange<Type> & begin()
```


### end

```cpp
public const TRange<Type> & end()
```


### operator*

```cpp
public Type operator*()
```





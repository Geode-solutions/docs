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

# class BaseRange


 Base class for range-based iteration on custom range. See derived classes for usage.



## Functions

### operator!=

```cpp
public bool operator!=(const BaseRange<Type, NextOperator> & )
```


### operator++

```cpp
public void operator++()
```


### current

```cpp
public Type current()
```


### BaseRange

```cpp
protected void BaseRange<Type, NextOperator>(T1 begin, T2 end)
```





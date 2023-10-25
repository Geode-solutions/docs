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

# class OwnerCircle


```cpp
Inherits from GenericCircle<OwnerPlane>
```



## Functions

### OwnerCircle

```cpp
public void OwnerCircle(OwnerPlane plane, double radius)
```


### OwnerCircle

```cpp
public void OwnerCircle(const OwnerCircle & other)
```


### operator=

```cpp
public OwnerCircle & operator=(const OwnerCircle & other)
```


### OwnerCircle

```cpp
public void OwnerCircle(OwnerCircle && other)
```


### operator=

```cpp
public OwnerCircle & operator=(OwnerCircle && other)
```





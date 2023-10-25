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

# class OwnerSphere


```cpp
Inherits from GenericSphere<Point<3U>, 3U>
```



# class OwnerSphere


```cpp
Inherits from GenericSphere<Point<dimension>, dimension>
```



## Functions

### OwnerSphere

```cpp
public void OwnerSphere<>(Point<dimension> origin, double radius)
```


### OwnerSphere

```cpp
public void OwnerSphere<>(const OwnerSphere<dimension> & other)
```


### operator=

```cpp
public OwnerSphere<dimension> & operator=(const OwnerSphere<dimension> & other)
```


### OwnerSphere

```cpp
public void OwnerSphere<>(OwnerSphere<dimension> && other)
```


### operator=

```cpp
public OwnerSphere<dimension> & operator=(OwnerSphere<dimension> && other)
```




# class OwnerSphere


```cpp
Inherits from GenericSphere<Point<2U>, 2U>
```




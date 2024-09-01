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

# class Sphere


```cpp
Inherits from GenericSphere<RefPoint<2U>, 2U>
```



# class Sphere


```cpp
Inherits from GenericSphere<RefPoint<3U>, 3U>
```



# class Sphere


```cpp
Inherits from GenericSphere<RefPoint<dimension>, dimension>
```



## Functions

### Sphere

```cpp
public void Sphere<>(const Point<dimension> & origin, double radius)
```


### Sphere

```cpp
public void Sphere<>(const Sphere<dimension> & other)
```


### Sphere

```cpp
public void Sphere<>(const OwnerSphere<dimension> & other)
```


### operator=

```cpp
public Sphere<dimension> & operator=(const Sphere<dimension> & other)
```


### Sphere

```cpp
public void Sphere<>(Sphere<dimension> && other)
```


### operator=

```cpp
public Sphere<dimension> & operator=(Sphere<dimension> && other)
```





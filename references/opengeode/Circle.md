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

# class Circle


```cpp
Inherits from GenericCircle<Plane>
```



## Functions

### Circle

```cpp
public void Circle(Plane plane, double radius)
```


### Circle

```cpp
public void Circle(const Circle & other)
```


### Circle

```cpp
public void Circle(const OwnerCircle & other)
```


### operator=

```cpp
public Circle & operator=(const Circle & other)
```


### Circle

```cpp
public void Circle(Circle && other)
```


### operator=

```cpp
public Circle & operator=(Circle && other)
```





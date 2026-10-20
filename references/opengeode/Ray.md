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

# class Ray


```cpp
Inherits from GenericLine<RefPoint<2U>, 2U>
```



# class Ray


```cpp
Inherits from GenericLine<RefPoint<dimension>, dimension>
```



## Functions

### Ray

```cpp
public void Ray<dimension>(const Vector<dimension> & direction, const Point<dimension> & origin)
```


### Ray

```cpp
public void Ray<dimension>(const Segment<dimension> & segment)
```


### Ray

```cpp
public void Ray<dimension>(const Ray<dimension> & other)
```


### Ray

```cpp
public void Ray<dimension>(const OwnerRay<dimension> & other)
```


### operator=

```cpp
public Ray<dimension> & operator=(const Ray<dimension> & other)
```


### Ray

```cpp
public void Ray<dimension>(Ray<dimension> && other)
```


### operator=

```cpp
public Ray<dimension> & operator=(Ray<dimension> && other)
```




# class Ray


```cpp
Inherits from GenericLine<RefPoint<1U>, 1U>
```



# class Ray


```cpp
Inherits from GenericLine<RefPoint<3U>, 3U>
```




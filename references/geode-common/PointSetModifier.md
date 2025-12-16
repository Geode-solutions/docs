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

# class PointSetModifier


```cpp
Inherits from VerticesModifier
```



# class PointSetModifier


```cpp
Inherits from VerticesModifier
```



## Functions

### PointSetModifier

```cpp
public void PointSetModifier<dimension>(const PointSet<dimension> & point_set, PointSetBuilder<dimension> & builder)
```


### PointSetModifier

```cpp
public void PointSetModifier<dimension>(PointSetModifier<dimension> && other)
```


### operator=

```cpp
public PointSetModifier<dimension> & operator=(PointSetModifier<dimension> && other)
```


### ~PointSetModifier

```cpp
public void ~PointSetModifier<dimension>()
```


### inactive_point

```cpp
public void inactive_point(index_t point_id)
```


### is_point_active

```cpp
public bool is_point_active(index_t point_id)
```


### clean

```cpp
public vector clean()
```


### clean_stamp

```cpp
public index_t clean_stamp()
```


### point_set

```cpp
protected const PointSet<dimension> & point_set()
```


### builder

```cpp
protected PointSetBuilder<dimension> & builder()
```




# class PointSetModifier


```cpp
Inherits from VerticesModifier
```




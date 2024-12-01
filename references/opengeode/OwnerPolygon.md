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

# class OwnerPolygon


```cpp
Inherits from GenericPolygon<Point<3U>, 3U>
```



# class OwnerPolygon


```cpp
Inherits from GenericPolygon<Point<dimension>, dimension>
```



## Functions

### OwnerPolygon

```cpp
public void OwnerPolygon<>(std::vector<Point<dimension> > vertices)
```


### OwnerPolygon

```cpp
public void OwnerPolygon<>(const OwnerPolygon<dimension> & other)
```


### operator=

```cpp
public OwnerPolygon<dimension> & operator=(const OwnerPolygon<dimension> & other)
```


### OwnerPolygon

```cpp
public void OwnerPolygon<>(OwnerPolygon<dimension> && other)
```


### operator=

```cpp
public OwnerPolygon<dimension> & operator=(OwnerPolygon<dimension> && other)
```




# class OwnerPolygon


```cpp
Inherits from GenericPolygon<Point<2U>, 2U>
```




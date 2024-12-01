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

# class Polygon


```cpp
Inherits from GenericPolygon<RefPoint<3U>, 3U>
```



# class Polygon


```cpp
Inherits from GenericPolygon<RefPoint<dimension>, dimension>
```



## Functions

### Polygon

```cpp
public void Polygon<>(std::vector<RefPoint<dimension> > vertices)
```


### Polygon

```cpp
public void Polygon<>(const Polygon<dimension> & other)
```


### operator=

```cpp
public Polygon<dimension> & operator=(const Polygon<dimension> & other)
```


### Polygon

```cpp
public void Polygon<>(Polygon<dimension> && other)
```


### operator=

```cpp
public Polygon<dimension> & operator=(Polygon<dimension> && other)
```




# class Polygon


```cpp
Inherits from GenericPolygon<RefPoint<2U>, 2U>
```




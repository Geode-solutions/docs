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

# class OrientedVertexCycle


## Functions

### OrientedVertexCycle

```cpp
public void OrientedVertexCycle<Container>(Container vertices)
```


### vertices

```cpp
public const Container & vertices()
```


### is_opposite

```cpp
public bool is_opposite(const OrientedVertexCycle<OtherContainer> & other)
```


### operator==

```cpp
public bool operator==(const OrientedVertexCycle<OtherContainer> & other)
```


### operator!=

```cpp
public bool operator!=(const OrientedVertexCycle<OtherContainer> & other)
```


### operator<

```cpp
public bool operator<(const OrientedVertexCycle<OtherContainer> & other)
```


### OrientedVertexCycle

```cpp
protected void OrientedVertexCycle<Container>()
```


### modifiable_vertices

```cpp
protected Container & modifiable_vertices()
```





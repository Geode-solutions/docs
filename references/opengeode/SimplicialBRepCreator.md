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

# class SimplicialBRepCreator


## Functions

### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, vector unique_points)
```


### ~SimplicialBRepCreator

```cpp
public void ~SimplicialBRepCreator()
```


### create_corners

```cpp
public vector create_corners(Span definitions)
```


### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```


### create_blocks

```cpp
public vector create_blocks(Span surfaces, Span definitions)
```


### create_blocks

```cpp
public vector create_blocks(Span corners, Span lines, Span surfaces, Span definitions)
```


### create_model_boundaries

```cpp
public vector create_model_boundaries(Span surfaces, Span definitions)
```





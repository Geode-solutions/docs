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

# class Propagator


## Functions

### Propagator

```cpp
public void Propagator<Mesh>(const Propagator<Mesh> & )
```


### operator=

```cpp
public Propagator<Mesh> & operator=(const Propagator<Mesh> & )
```


### Propagator

```cpp
public void Propagator<Mesh>(Propagator<Mesh> && )
```


### operator=

```cpp
public Propagator<Mesh> & operator=(Propagator<Mesh> && )
```


### ~Propagator

```cpp
public void ~Propagator<Mesh>()
```


### identifier

```cpp
public index_t identifier(index_t element)
```


### identify_elements

```cpp
public index_t identify_elements()
```


### identify_elements

```cpp
public index_t identify_elements(index_t nb_max_elements)
```


### identified_components

```cpp
public FixedArray identified_components()
```


### Propagator

```cpp
protected void Propagator<Mesh>(const Mesh & mesh, index_t nb_elements)
```


### mesh

```cpp
protected const Mesh & mesh()
```





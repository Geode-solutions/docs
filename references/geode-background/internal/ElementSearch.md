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

# class ElementSearch


# class ElementSearch


# class ElementSearch


# class ElementSearch


## Functions

### ElementSearch

```cpp
public void ElementSearch<Mesh>(const ElementSearch<Mesh> & )
```


### operator=

```cpp
public ElementSearch<Mesh> & operator=(const ElementSearch<Mesh> & )
```


### ElementSearch

```cpp
public void ElementSearch<Mesh>()
```


### ~ElementSearch

```cpp
public void ~ElementSearch<Mesh>()
```


### initial_containing_element

```cpp
public optional initial_containing_element(const Point<Mesh::dim> & point)
```


### reinitialize_elements_tree

```cpp
public void reinitialize_elements_tree(const Mesh & mesh)
```


### ElementSearch

```cpp
protected void ElementSearch<Mesh>(ElementSearch<Mesh> && other)
```


### operator=

```cpp
protected ElementSearch<Mesh> & operator=(ElementSearch<Mesh> && other)
```





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

# class ComponentID


 Identify a component by its type and a unique index



## Functions

### ComponentID

```cpp
public void ComponentID()
```


### ComponentID

```cpp
public void ComponentID(NamedType component_type, uuid id)
```


### id

```cpp
public const uuid & id()
```


### id

```cpp
public uuid && id()
```


### type

```cpp
public const ComponentType & type()
```


### type

```cpp
public ComponentType && type()
```


### operator!=

```cpp
public bool operator!=(const ComponentID & other)
```


### operator==

```cpp
public bool operator==(const ComponentID & other)
```


### string

```cpp
public basic_string string()
```





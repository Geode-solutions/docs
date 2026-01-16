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

# class ModifiableObjectOrchestrator


```cpp
Inherits from Orchestrator<Element>
```



## Functions

### ModifiableObjectOrchestrator

```cpp
public void ModifiableObjectOrchestrator<Object, Element>(const ModifiableObjectOrchestrator<Object, Element> & )
```


### operator=

```cpp
public ModifiableObjectOrchestrator<Object, Element> & operator=(const ModifiableObjectOrchestrator<Object, Element> & )
```


### ModifiableObjectOrchestrator

```cpp
public void ModifiableObjectOrchestrator<Object, Element>(ModifiableObjectOrchestrator<Object, Element> && )
```


### operator=

```cpp
public ModifiableObjectOrchestrator<Object, Element> & operator=(ModifiableObjectOrchestrator<Object, Element> && )
```


### ~ModifiableObjectOrchestrator

```cpp
public void ~ModifiableObjectOrchestrator<Object, Element>()
```


### object

```cpp
public const Object & object()
```


### modifier

```cpp
public const Modifier & modifier()
```


### modifiable_object

```cpp
public const ModifiableObject<Object> & modifiable_object()
```


### ModifiableObjectOrchestrator

```cpp
protected void ModifiableObjectOrchestrator<Object, Element>(ModifiableObject<Object> modifiable_object)
```


### modifier

```cpp
protected Modifier & modifier()
```





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

# class BackgroundOrchestrator


```cpp
Inherits from Orchestrator<Element>
```



## Functions

### BackgroundOrchestrator

```cpp
public void BackgroundOrchestrator<Background, Element>(const BackgroundOrchestrator<Background, Element> & )
```


### operator=

```cpp
public BackgroundOrchestrator<Background, Element> & operator=(const BackgroundOrchestrator<Background, Element> & )
```


### BackgroundOrchestrator

```cpp
public void BackgroundOrchestrator<Background, Element>(BackgroundOrchestrator<Background, Element> && )
```


### operator=

```cpp
public BackgroundOrchestrator<Background, Element> & operator=(BackgroundOrchestrator<Background, Element> && )
```


### ~BackgroundOrchestrator

```cpp
public void ~BackgroundOrchestrator<Background, Element>()
```


### background

```cpp
public const Background & background()
```


### modifier

```cpp
public const Modifier & modifier()
```


### modifiable_background

```cpp
public const ModifiableObject<Background> & modifiable_background()
```


### BackgroundOrchestrator

```cpp
protected void BackgroundOrchestrator<Background, Element>(ModifiableObject<Background> & modifiable_background)
```


### modifier

```cpp
protected Modifier & modifier()
```





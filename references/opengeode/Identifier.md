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

# class Identifier


## Functions

### Identifier

```cpp
public void Identifier(Identifier && other)
```


### ~Identifier

```cpp
public void ~Identifier()
```


### id

```cpp
public const uuid & id()
```


### name

```cpp
public string_view name()
```


### save_identifier

```cpp
public void save_identifier(string_view directory)
```


### set_id

```cpp
public void set_id(const uuid & unique_id, IdentifierKey )
```


### set_name

```cpp
public void set_name(string_view name, IdentifierKey )
```


### load_identifier

```cpp
public void load_identifier(string_view directory, IdentifierKey )
```


### Identifier

```cpp
protected void Identifier()
```


### operator=

```cpp
protected Identifier & operator=(Identifier && other)
```


### set_id

```cpp
protected void set_id(const uuid & unique_id)
```


### set_name

```cpp
protected void set_name(string_view name)
```





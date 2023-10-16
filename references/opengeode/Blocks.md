# class Blocks


# class Blocks


 Storage class providing range loop to iterate on Blocks



## Records

BlockRangeBase

BlockRange



## Functions

### Blocks

```cpp
public void Blocks<dimension>(const Blocks<dimension> & )
```


### operator=

```cpp
public Blocks<dimension> & operator=(const Blocks<dimension> & )
```


### ~Blocks

```cpp
public void ~Blocks<dimension>()
```


### nb_blocks

```cpp
public index_t nb_blocks()
```


### has_block

```cpp
public bool has_block(const uuid & id)
```


### block

```cpp
public const Block<dimension> & block(const uuid & id)
```


 Access to an unmodifiable Block by its unique index

### blocks

```cpp
public BlockRange blocks()
```


### save_blocks

```cpp
public void save_blocks(string_view directory)
```


 Save each Block in a file located in the specified directory

### Blocks

```cpp
protected void Blocks<dimension>()
```


### Blocks

```cpp
protected void Blocks<dimension>(Blocks<dimension> && other)
```


### operator=

```cpp
protected Blocks<dimension> & operator=(Blocks<dimension> && other)
```





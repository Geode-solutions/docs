# class ProgressLoggerManager


## Functions

### ~ProgressLoggerManager

```cpp
public void ~ProgressLoggerManager()
```


### register_client

```cpp
public void register_client(std::unique_ptr<ProgressLoggerClient> && client)
```


### start

```cpp
public void start(const uuid & progress_logger_id, const std::string & message, index_t nb_steps)
```


### update

```cpp
public void update(const uuid & progress_logger_id, index_t current_step, index_t nb_steps)
```


### completed

```cpp
public void completed(const uuid & progress_logger_id)
```


### failed

```cpp
public void failed(const uuid & progress_logger_id)
```





Promise.allSettled =
    Promise.allSettled ||
    function (promises) {
        return Promise.all(
            promises.map(function (p) {
                return p
                    .then(function (value) {
                        return {
                            status: 'fulfilled',
                            value: value,
                        }
                    })
                    .catch(function (reason) {
                        return {
                            status: 'rejected',
                            reason: reason,
                        }
                    })
            }),
        )
    }
